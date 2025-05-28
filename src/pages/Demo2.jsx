// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import Card from "../components/Card";
import CardScroll from "../components/CardScroll";

export const Demo2 = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  return (
      <>
          <div className="card-group card-group-scroll">
              <CardScroll key={1} title="a - Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A" url="https://tralala" />
              <CardScroll key={2} title="b - Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. B" url="https://tralala" />
              <CardScroll key={3} title="c - Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. C" url="https://tralala" />
              <CardScroll key={4} title="d - Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. D" url="https://tralala" />
              <CardScroll key={5} title="e - Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. E" url="https://tralala" />
              <CardScroll key={5} title="e - Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. E" url="https://tralala" />
              <CardScroll key={5} title="e - Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. E" url="https://tralala" />
              <CardScroll key={5} title="e - Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. E" url="https://tralala" />
        </div>
      </>
  );
};
