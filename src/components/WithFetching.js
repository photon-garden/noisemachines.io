import React from 'react'
import axios from 'axios'

export default class WithFetching extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: undefined,
      isLoading: false,
      error: undefined
    }

    this.fetch = this.fetch.bind(this)
  }

  mergeData (oldData, newData, mergeDataContext) {
    if (this.props.mergeData) {
      return this.props.mergeData(oldData, newData, mergeDataContext)
    } else {
      return newData
    }
  }

  async fetch (url, mergeDataContext) {
    this.setState({ isLoading: true })

    try {
      const result = await axios.get(url)
      this.setState(state => {
        const data = this.mergeData(state.data, result.data, mergeDataContext)
        return {
          data,
          isLoading: false
        }
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      })
    }
  }

  render () {
    const Component = this.props.component
    return <Component {...this.props} {...this.state} fetch={this.fetch} />
  }
}
