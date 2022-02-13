import React from "react";
import { useState, useEffect, useRef } from "react";

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  //when component is mounted return from useEffect
  //fix memory leak:
  //Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.


  const isMounted = useRef(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });

    //runs when component is unmounted, set dependency when isMounted is true 


    return () => {
      // console.log(124)
      isMounted.current = false;
    };
  }, [isMounted]);

  return loading ? <h3>loading...</h3> : <h3>{todo.title}</h3>;
}

export default Todo;
