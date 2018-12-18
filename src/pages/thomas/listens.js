import React from 'react'
import WithFetching from '../../components/WithFetching'
import withInfiniteScroll from '../../components/withInfiniteScroll'
import FormattedDate from '../../components/FormattedDate'
import FormattedTime from '../../components/FormattedTime'
import FullPageTable from '../../components/FullPageTable'
import { Transition } from 'react-spring'

const Listen = ({ track, album, artist, listenedAt }) => (
  <tr>
    <td>{track.name}</td>
    <td>{album.name}</td>
    <td>{artist.name}</td>
    <td>
      <FormattedTime dateTime={listenedAt} />
    </td>
  </tr>
)

const Footer = ({ fetchMoreData }) => (
  <tr>
    <td colSpan='2' />
    <td>
      <a
        href='javascript:void(0);'
        className='button special icon fa-search'
        onClick={fetchMoreData}
      />
    </td>
  </tr>
)

const toKey = ({ track, album, artist, listenedAt }) =>
  track.name + '-' + album.name + '-' + artist.name + '-' + listenedAt

const subtractDays = (date, daysToSubtract) => {
  const millisecondsInADay = 86400000
  const elapsedDays = millisecondsInADay * daysToSubtract
  return new Date(date.getTime() - elapsedDays)
}

const toEndOfDay = date => {
  const endOfDay = new Date(date.getTime())
  endOfDay.setHours(23, 59, 59, 999)
  return endOfDay
}

const toBeginningOfDay = date => {
  const beginningOfDay = new Date(date.getTime())
  beginningOfDay.setHours(0, 0, 0, 0)
  return beginningOfDay
}

const toTrs = day => {
  const trs = []
  trs.push(
    <tr key={day.date.toISOString()} className='alt align-center'>
      <td colSpan='4'>
        <FormattedDate dateTime={day.date} />
      </td>
    </tr>
  )
  if (day.listens.length === 0) {
    trs.push(
      <tr key={day.date.toISOString() + '-no-listens'} className='align-center'>
        <td colSpan='4' className='big-emoji'>
          🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️
        </td>
      </tr>
    )
  } else {
    day.listens.forEach(listen => {
      trs.push(<Listen key={toKey(listen)} {...listen} />)
    })
  }
  return trs
}

const FullPageTableWithInfiniteScroll = withInfiniteScroll(FullPageTable)
const getKey = item => item.key
class ListensContainer extends React.Component {
  constructor (props) {
    super(props)
    this.fetchNextDay = this.fetchNextDay.bind(this)
  }

  static mergeData (
    previousDays = [],
    apiResponseForNewDay = {},
    dateForNewDay
  ) {
    const newDay = {
      date: dateForNewDay,
      listens: apiResponseForNewDay.contents
    }
    return [...previousDays, newDay]
  }

  async componentDidMount () {
    await this.fetchNextDay()
  }

  fetchNextDay () {
    if (this.daysAgo == null) {
      this.daysAgo = 0
    } else {
      this.daysAgo += 1
    }

    if (!this.endOfToday) this.endOfToday = toEndOfDay(new Date())

    // Get listens that happened between `from` and `to`
    let to = subtractDays(this.endOfToday, this.daysAgo)
    let from = toBeginningOfDay(to)
    const toInMs = to.getTime()
    const fromInMs = from.getTime()
    // const url = `https://data.noisemachines.io/thomas/listens?from=${fromInMs}&to=${toInMs}`
    const url = `http://localhost:3000/thomas/listens?from=${fromInMs}&to=${toInMs}`
    return this.props.fetch(url, from)
  }

  render () {
    const { data, isLoading } = this.props
    const days = data || []
    let trs = []
    days.forEach(day => {
      const dayTrs = toTrs(day)
      trs = trs.concat(dayTrs)
    })
    const footerTr = <Footer fetchMoreData={this.fetchNextDay} />

    const trsTransition = (
      <Transition
        items={days}
        keys={getKey}
        from={{ transform: 'translate3d(0,-40px,0)' }}
        enter={{ transform: 'translate3d(0,0px,0)' }}
        leave={{ transform: 'translate3d(0,-40px,0)' }}
      >
        {day => props => <tr style={props}>{day.date.toLocaleString()}</tr>}
      </Transition>
    )

    return (
      <React.Fragment>
        <FullPageTableWithInfiniteScroll
          h1={'Listening History 🎧'}
          ths={['Song', 'Album', 'Artist', 'Listened At']}
          trs={trs}
          footerTr={footerTr}
          onHitBottom={this.fetchNextDay}
        />
      </React.Fragment>
    )
  }
}

export default () => (
  <WithFetching
    component={ListensContainer}
    mergeData={ListensContainer.mergeData}
  />
)
