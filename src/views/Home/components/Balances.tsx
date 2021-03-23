import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import usePresale from '../../../hooks/usePresale'
import { getDepositAmount } from '../../../presale/utils'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import ERC20ABI from '../../../presale/lib/abi/presaleErc20.json'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: '#751113',
    height: 3,
    width: '100%',
  },
  thumb: {
    height: 34,
    width: 20,
    borderRadius: 'inherit',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    zIndex: 0,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 5,
    borderRadius: 1,
    display: 'block',
  },
  rail: {
    height: 5,
    borderRadius: 20,
    display: 'block',
  },
})(Slider);

const Balances: React.FC = () => {
  const classes = useStyles();
  const [DepositAmount, setDepositAmount] = useState<BigNumber>()
  const presale = usePresale();

  const [depositNum, setNum] = useState(0)

  const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));
  const presaleContract = new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, '0xbDB2c7b6960C29A016212F76AA10F92c89b7CAE1');

  const handledeposit = async () => {
    const depositnum = await presaleContract.methods.getDepositAmount().call();
    setNum(depositnum)
    return depositnum
  }

  handledeposit();
  
  useEffect(() => {
    async function fetchDepositAmount() {
      const amount = await getDepositAmount(presale)
      setDepositAmount(amount)
    }
    if (presale.presale) {
      fetchDepositAmount()
    }
  }, [presale, setDepositAmount])

  let depositAmount = 0

  BigNumber.set({ DECIMAL_PLACES: 10 })
  if(DepositAmount) {
    depositAmount = DepositAmount.toNumber() / 1E18
  } else {
    depositAmount = depositNum / 1E18
  }

  const [value, setValue] = React.useState<number | string | Array<number | string>>(depositAmount)

  const handleSliderChange =  (event: any, newValue: number | number[]) => {
      setValue(depositAmount)
  };
  
  return (
    <div>
      <div style={{display: 'inline-flex', width:'100%' }}>
        <StyledBalance>
          <div style={{ flex: 1, }}>
            <div style={{display: 'flex', placeContent:'center'}}>
              <Label text="Auction progress: " />
              <span>&nbsp;</span>
              <Value
                value={depositAmount}
              />
              <Label text=" BNB / 2000 BNB" />
            </div>
            <div className={classes.root}>
              <PrettoSlider className='' key={`PrettoSlider-${depositAmount}`}
                valueLabelDisplay="off" defaultValue={depositAmount} min={0} max={375}
                value={typeof value === 'number' ? depositAmount : 0}
                onChange={handleSliderChange}
                aria-labelledby="continuous-slider"
              />
            </div>
          </div>
        </StyledBalance>
      </div>
  </div>
)
}

const StyledBalance = styled.div`
  margin-top: 40px;
  width: 100%
  align-items: center;
  display: flex;
  flex: 1;
`

export default Balances
