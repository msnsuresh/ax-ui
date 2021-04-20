import * as React from "react";
import DateRangeContext, {
  DateRangeType,
} from "../../Context/DateRangeContext";
import { formatDate } from "../../utils/Date.utils";

export interface DateRangeProps {}

const DateRange: React.FC<DateRangeProps> = (): React.ReactElement => {
  const list = [
    {
      value: "1W",
      type: DateRangeType.ONE_WEEK,
    },
    {
      value: "1M",
      type: DateRangeType.ONE_MONTH,
    },
    {
      value: "3M",
      type: DateRangeType.THREE_MONTH,
    },
    {
      value: "6M",
      type: DateRangeType.SIX_MONTH,
    },
    {
      value: "1Y",
      type: DateRangeType.ONE_YEAR,
    },
    {
      value: "2Y",
      type: DateRangeType.TWO_YEAR,
    },
    {
      value: "4Y",
      type: DateRangeType.FOUR_YEAR,
    },
  ];
  const tmpEndDate = new Date();
  const tmpStartDate = new Date();

  const { type, setType, setStartDate, setEndDate } = React.useContext(
    DateRangeContext
  );
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.value;
    switch (type) {
      case DateRangeType.ONE_WEEK: {
        tmpStartDate.setDate(tmpEndDate.getDate() - 7);
        break;
      }
      case DateRangeType.ONE_MONTH: {
        tmpStartDate.setDate(tmpEndDate.getDate() - 30);
        break;
      }
      case DateRangeType.THREE_MONTH: {
        tmpStartDate.setDate(tmpEndDate.getDate() - 90);
        break;
      }
      case DateRangeType.SIX_MONTH: {
        tmpStartDate.setDate(tmpEndDate.getDate() - 180);
        break;
      }
      case DateRangeType.ONE_YEAR: {
        tmpStartDate.setDate(tmpEndDate.getDate() - 365);
        break;
      }
      case DateRangeType.TWO_YEAR: {
        tmpStartDate.setDate(tmpEndDate.getDate() - 730);
        break;
      }
      case DateRangeType.FOUR_YEAR: {
        tmpStartDate.setDate(tmpEndDate.getDate() - 1460);
        break;
      }
    }
    setType(type as DateRangeType);
    setEndDate(formatDate(tmpEndDate));
    setStartDate(formatDate(tmpStartDate));
  };
  return (
    <>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {list.map((item, index) => (
          <label
            key={`${item.value}-${index}`}
            className={`btn btn-secondary ${item.type === type && "active"}`}
          >
            <input
              type="radio"
              name="options"
              id="option1"
              checked={item.type === type}
              onChange={changeHandler}
              value={item.type}
            />
            {item.value}
          </label>
        ))}
      </div>
    </>
  );
};

export default DateRange;
