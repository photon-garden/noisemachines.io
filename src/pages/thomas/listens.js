import React from 'react'
import WithFetching from '../../components/WithFetching'
import withInfiniteScroll from '../../components/withInfiniteScroll'
import FormattedDate from '../../components/FormattedDate'
import FormattedTime from '../../components/FormattedTime'
import FullPageTable from '../../components/FullPageTable'
import { Transition, animated } from 'react-spring'

const Listen = ({ track, album, artist, listenedAt, key, style }) => (
  <animated.tr className='listen' style={style} key={key}>
    <td className='track'>{track.name}</td>
    <td className='album'>{album.name}</td>
    <td className='artist'>{artist.name}</td>
    <td className='listened-at'>
      <FormattedTime dateTime={listenedAt} />
    </td>
  </animated.tr>
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

const NoListensTr = ({ style, key }) => (
  <animated.tr style={style} key={key} className='align-center'>
    <td colSpan='4' className='big-emoji'>
      🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️
    </td>
  </animated.tr>
)

const DayHeadingTr = ({ style, day }) => (
  <animated.tr
    style={style}
    key={day.date.toISOString()}
    className='alt align-center'
  >
    <td colSpan='4'>
      <FormattedDate dateTime={day.date} />
    </td>
  </animated.tr>
)

const ListenTr = ({ component, ...props }) => {
  const Component = component
  return <Component {...props} />
}

const toRows = day => {
  const rows = []
  rows.push({ component: DayHeadingTr, day, key: day.date.toISOString() })
  if (day.listens.length === 0) {
    const key = day.date.toISOString() + '-no-listens'
    rows.push({ component: NoListensTr, key })
  } else {
    day.listens.forEach(listen => {
      const key = toKey(listen)
      rows.push({ component: Listen, key, ...listen })
    })
  }
  return rows
}

const FullPageTableWithInfiniteScroll = withInfiniteScroll(FullPageTable)
const getKey = item => item.key

const nearBottom = () =>
  window.innerHeight + window.scrollY >= document.body.offsetHeight - 500

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

  async fetchNextDay () {
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
    const url = `http://data.noisemachines.io/thomas/listens?from=${fromInMs}&to=${toInMs}`
    await this.props.fetch(url, from)
    if (nearBottom()) {
      this.fetchNextDay()
    }
  }

  render () {
    const { data, isLoading } = this.props
    const days = data || []
    let rows = []
    days.forEach(day => {
      const dayRows = toRows(day)
      rows = rows.concat(dayRows)
    })

    const trs = (
      <Transition
        native
        items={rows}
        keys={getKey}
        from={{ opacity: 0, transform: 'translate3d(-40px,0,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
        leave={{ opacity: 0, transform: 'translate3d(-40px,0,0)' }}
        trail={100}
      >
        {row => props => <ListenTr style={props} {...row} />}
      </Transition>
    )

    const ths = (
      <React.Fragment>
        <th className='track'>Song</th>
        <th className='album'>Album</th>
        <th className='artist'>Artist</th>
        <th className='listened-at'>ListenedAt</th>
      </React.Fragment>
    )

    return (
      <React.Fragment>
        <FullPageTableWithInfiniteScroll
          h1={'Listening History 🎧'}
          ths={ths}
          trs={trs}
          wrapperClass={'listening-history'}
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
