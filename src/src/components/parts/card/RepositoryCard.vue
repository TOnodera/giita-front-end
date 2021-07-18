<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h3 class="subtitle is-size-6"><slot name="title"></slot></h3>
        <p><slot name="description"></slot></p>
        <div class="columns">
          <div class="column">
            <span>最終更新</span><slot name="updated-at"></slot>
          </div>
          <div class="column has-text-centered">
            <fa icon="star" class="star-icon" />
            <span class="ml-2">
              <slot name="star-num"></slot>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.star-icon {
  color: yellow;
}
</style>
