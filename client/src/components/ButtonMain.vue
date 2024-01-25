<template>
  <button :class="btnStyle" @Click="onClick">
    {{ text }}
  </button>
</template>

<script>
export default {
    name: "ButtonMain",
    props: ["text", "btnStyle", "onClick"]
}
</script>
