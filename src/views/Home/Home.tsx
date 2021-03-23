import React, {useState} from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Balances from './components/Balances'
import { Input } from '@material-ui/core';
import * as bsc from '@binance-chain/bsc-use-wallet'
import { useWallet } from 'use-wallet'
import BigNumber from 'bignumber.js'
import usePresale from '../../hooks/usePresale'
import { deposit } from '../../presale/utils'
import { useMediaQuery } from 'react-responsive'
import Value from '../../components/Value'
import Countdown from 'react-countdown'
import ERC20ABI from '../../presale/lib/abi/presaleErc20.json'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import Binance from 'binance-api-node'
import mainImg from '../../assets/img/main.gif'

const binance = Binance()

let startTime = new Date()
let endTime = new Date('03/23/2021 5:16')
let launchTime = Math.abs(startTime.getTime() - endTime.getTime())

const Home: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const [tokenPrice, setNum] = useState(0)
  
  const getBnbPrice = async () => {
    let ticker = await binance.prices({ symbol: 'BNBUSDT' })
    let price = Number(ticker['BNBUSDT'])
    setNum(price/27.5)
  }
  getBnbPrice()

  const { account }: { account: any } = bsc.useWallet()

  const wallet =  bsc.useWallet()

  let description = <div style={{textAlign:'center', fontSize:'26px', fontFamily: 'Optima', color: 'black', lineHeight:'48px', fontWeight:'bold'}}>
                    <span>Join The Presale</span>
                    </div>;

  const [leftTime, setCountTime] = useState(0)

  const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));
  const presaleContract = new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, '0xbDB2c7b6960C29A016212F76AA10F92c89b7CAE1');

  const getLeftTime = async () => {
    const leftTimeNum = await presaleContract.methods.getLeftTimeAmount().call();
    setCountTime(new BigNumber(leftTimeNum).toNumber() * 1000)
  } 
  getLeftTime()
  
  const [depositInput, setDepositNum] = useState(0)

  const depositInputChange = (e : any) => {
    let depositVal = e.target.value;
    setDepositNum (depositVal)
  }

  const presale = usePresale();

  const depositEther = () => {
    deposit(presale, account, depositInput)
  };

  return (
    <div>
        <Page>        
          <div style={{ display: isDesktopOrLaptop? "grid" : "block", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
            <div></div>
            <PageHeader
              icon={<img style={{ width: 150 }} src={mainImg} />}
              maintitle="Piano-Swap"
              title="MozartFinance"
              subtitle={wallet.account}
            />
          </div>
          <div style={{display: isDesktopOrLaptop?'flex':'block', width: isDesktopOrLaptop?1072:'auto', margin: isDesktopOrLaptop?"40px auto auto auto":"40px auto"}}>
            <StyledContainer>
              <div style={{width:isDesktopOrLaptop?"456px":'auto',}}>
                <span style={{textAlign:'left'}}>Participant: Public</span>
              </div>
              <div style={{marginTop:'36px', padding:'12px 0', display:'grid', borderBottom:'1px solid rgba(0, 0, 0, 0.3)', }}>
                <span>Fixed Swap Ratio</span>
                <span className='boldFont'>1 BNB = 27.5 PIANO</span>
              </div>
              <div style={{display:'flex'}}>
                <div className='priceState' style={{width:isDesktopOrLaptop?200:"50%"}}>
                  <span>Price $</span>
                  <span className='boldFont'>
                    <Value
                      value={tokenPrice}
                    />
                  </span>
                </div>
                <div className='priceState' style={{margin:'auto 0 0 auto', width:isDesktopOrLaptop?200:"50%"}}>
                  <span>Maximum per wallet</span>
                  <span className='boldFont'>20 BNB</span>
                </div>
              </div>
              <Balances />
            </StyledContainer>
            <StyledContainerR>
              <div>
                {description}
              </div>
              <div style={{display:'flex', justifyContent:'center', marginTop:'8px', marginBottom:'24px'}}>
                <Countdown date={Date.now() + leftTime} />
              </div>
              <div className="borderLine" />
              <div className="bidAmount">
                <span style={{fontSize: 15, color: 'black'}}>Your Bid Amount</span>
                <div style={{display:'flex', color: 'black', fontSize: 15}}>
                  <span>Balance:&nbsp;</span>
                  { wallet && 
                    <div>
                      <Value
                        value={new BigNumber(wallet.balance)
                            .div(new BigNumber(10).pow(18))
                            .toNumber()}
                      />
                    </div>
                  }
                  { !wallet &&
                    <span>--</span>
                  }
                  <span>BNB</span>
                </div>
              </div>
              <Input type='number' onChange={depositInputChange} style={{width: '100%', bottom: 10, color: 'black', marginTop: 30, marginBottom: 0, }} placeholder='Bid Amount' />
              <div style={{marginTop:'50px'}}>
                <Button disabled ={!account} text="Deposit" onClick={depositEther} variant="secondary" />
              </div>
            </StyledContainerR>
          </div>
      </Page>
    </div>
  )
}

const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  max-width: 456px;
  width: 100%;
  padding: 20px;
  position: relative;
  border: 1px solid #751113;
  border-radius: 20px;
  font-family: "Nunito";
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  @media (max-width: 767px) {
    // width: auto;
    // padding: 0px;
    // left: 0;
  }
`
const StyledContainerR = styled.div`
  box-sizing: border-box;
  margin: 0px;
  max-width: 456px;
  width: 100%;
  padding: 20px;
  position: relative;
  border: 1px solid #751113;
  border-radius: 20px;
  font-family: "Nunito";
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  margin: auto 0 0 auto;
  padding: 48px 56px;
  // background: linear-gradient(108.1deg, #b84c4f, #751113 48.54%, #751113);
  // background-color: #751113;
  color: black;
  font-family: "Nunito";
  min-height: 475px;
  vertical-align: middle;
  @media (max-width: 767px) {
    margin-top:30px;
    padding: 48px 20px;
    // width: auto;
    // left: 0;
  }
`

export default Home
