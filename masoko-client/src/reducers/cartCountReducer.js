import { ref } from "vue";

export function cartCounterRducer(initialState, reducer) {
  const state = ref(initialState);

  const dispatch = (action) => {
    state.value = reducer(state.value, action);
  };

  return [state, dispatch];
}

export function cartCounterReducerFunction(state, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "remove":
      return state - 1;
    default:
      return state;
  }
}