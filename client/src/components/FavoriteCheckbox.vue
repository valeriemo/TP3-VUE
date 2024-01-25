<template>
    <div class="flex items-center">
      <label for="favorite" class="text-sm font-medium dark:text-gray-300 pr-2">
        {{ text }}
      </label>
      <template v-if='isChecked'>
        <span class='text-xl cursor-pointer' @click='onChange'>❤️</span>
      </template>
      <template v-else>
        <span class='text-xl cursor-pointer' @click='onChange'>🤍</span>
      </template>
    </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    },
    text: {
      type: String,
      default: 'Mettre dans ses coups de cœur'
    }
  }
}
</script>
