<template>
  <button v-ripple>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  min-width: 32px;
  min-height: 32px;
  background-image: linear-gradient(rgb(240, 166, 116), rgb(218, 124, 61));
  background-size: cover;
  border-radius: 24px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);

  cursor: pointer;
  border: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  line-height: 32px;
  vertical-align: middle;
  color: white;
  transition: 0.2s;
}

button:hover {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2), 0px 5px 12px rgba(0, 0, 0, 0.12),
    0px 8px 10px rgba(0, 0, 0, 0.14);
}

button:disabled,
button:active {
  box-shadow: none;
}

button:disabled {
  background: rgb(97, 94, 75);
  cursor: unset;
  color: lightgrey;
}

button:focus {
  outline: 0;
}
</style>