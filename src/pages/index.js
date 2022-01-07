import Head from 'next/head'
import styled from "styled-components"
import { increment, decrement } from "store/counter/counter.actions"
import { getCount } from "store/counter/counter.selectors"
import { connect } from 'react-redux'

const mapState = state => ({
  count: getCount(state)
})

const mapDispatch = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement())
})

const CounterContainer = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const Button = styled.button``

const Count = styled.div`
  margin-top: 30px;
`

const Home = ({ onIncrement, onDecrement, count }) => (
  <Center>
    <Head>
      <title>Title</title>
      <meta name="description" content="content" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CounterContainer>
      <Button onClick={onIncrement}>+</Button>
      <Button onClick={onDecrement}>-</Button>
    </CounterContainer>
    <Count>{count}</Count>
  </Center>
)

export default connect(mapState, mapDispatch)(Home)
