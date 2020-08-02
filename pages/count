import { useState } from "react";
import PageContainer from "../../components/page-container";
import ReactCalander from "react-calendar";
import { InputNumber } from "antd";
import Big from "big.js";
import "./style.styl";

const PREFIX_CLASS = "count-page";

export default function Count() {
  const [money, onChangeMomey] = useState(0);
  const [yearRate, onChangeRage] = useState(0);
  const [value, onChangeDate] = useState([new Date(), new Date()]);
  const [startDate, endDate] = value;
  const monthRate = new Big(yearRate || 0).div(1200);
  const selectRange = endDate.getMonth() - startDate.getMonth() + 1;
  const basicPerMonth = new Big(money || 0).div(selectRange);

  function _handleOnChangeDate(date: Date | Date[]) {
    onChangeDate(date as any);
  }

  function _handleOnChangeMomey(value: any) {
    onChangeMomey(value);
  }

  function _handleOnChangeRate(value: any) {
    onChangeRage(value);
  }

  return (
    <PageContainer className={PREFIX_CLASS}>
      <div className="basic-input">
        <div>
          貸款金額(NT):
          <InputNumber
            size="large"
            onChange={_handleOnChangeMomey}
            value={money}
            min={0}
          />
        </div>
        <div>
          年利率(%):
          <InputNumber
            size="large"
            onChange={_handleOnChangeRate}
            value={yearRate}
            min={0}
          />
        </div>
        <p>
          填完總借貸金額跟年利率後請選擇下方的月曆，選定開始跟結束月份後會自動算出需償還本金跟利息
        </p>
      </div>
      <ReactCalander
        selectRange
        onChange={_handleOnChangeDate}
        value={value}
        maxDetail="year"
        minDetail="month"
        tileContent={(args: any) => {
          const { date } = args;

          if (
            date.getTime() >= startDate.getTime() &&
            date.getTime() <= endDate.getTime()
          ) {
            const range = date.getMonth() - startDate.getMonth();
            const returnedLoan = basicPerMonth.times(range);
            let currentMomey = new Big(0);

            currentMomey = new Big(money || 0).minus(returnedLoan);
            const interest = currentMomey.times(monthRate);
            return (
              <div>
                <div>還款本金:{basicPerMonth.toFixed(2)}元</div>
                <div>還款利息:{interest.toFixed(2)}元</div>
              </div>
            );
          }
          return (
            <div>
              <div>還款本金:0.00元</div>
              <div>還款利息:0.00元</div>
            </div>
          );
        }}
      />
      <div className="notice">
        本試算表僅供參考，實際金額以當面服務洽談為準。
      </div>
    </PageContainer>
  );
}
