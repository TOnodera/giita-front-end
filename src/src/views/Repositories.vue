<template>
  <dashboard>
    <template v-slot:title> リポジトリ一覧</template>
    <template v-slot:default>
      <router-link to="/repository/test">
        <div class="columns is-centered">
          <div class="column">
            <div class="columns is-multiline">
              <div class="column is-3 m-5">
                <repository-card>
                  <template v-slot:title>リポジトリ名</template>
                  <template v-slot:description>ディスクリプション</template>
                  <template v-slot:updated-at>2021-07-02</template>
                  <template v-slot:star-num>202</template>
                </repository-card>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </template>
  </dashboard>
</template>
<script>
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue";
import RepositoryCard from "@/components/parts/card/RepositoryCard.vue";
export default defineComponent({
  components: {
    Dashboard,
    RepositoryCard,
  },
});
</script>
