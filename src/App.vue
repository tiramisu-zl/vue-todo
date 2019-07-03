<template>
  <div id="app">
    <section class="todoapp" >
      <Header></Header>
      <Todo></Todo>
    </section>
  </div>
</template>

<script>
import Header from "./components/Header"
import Todo from "./components/Todo"

export default {
  name: 'app',
  components: {
    Header,
    Todo,
  }
}

</script>
