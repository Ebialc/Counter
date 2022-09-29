import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


export const SetCounter = () => {
  const initialCount = useSelector((state) => state.count);
 const [count, setCount] = useState(0);
 const dispatch = useDispatch();

 useEffect(() => {
  setCount(countFromStore)
 }, [countFromStore]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input id="set-to" type="number" value={count} 
        onChange={event => setCount(event.target.value)} />
        <input type="submit" />
      </form>
    </section>
  );
};
