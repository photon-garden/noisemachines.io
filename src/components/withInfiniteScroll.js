import React from 'react'
import debounce from 'lodash.debounce'

export default Component =>
  class WithInfiniteScroll extends React.Component {
    constructor (props) {
      super(props)
      this.handleScroll = debounce(this.handleScroll.bind(this), 200)
    }

    componentDidMount () {
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount () {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll (e) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        this.props.onHitBottom()
      }
    }

    render () {
      return <Component {...this.props} />
    }
  }
