<template>
  <div>
    <Dashboard>
      <section class="hero is-primary">
        <div class="hero-body">
          <h1 class="title">日々の学習をqiitaに残す</h1>
        </div>
      </section>
      <section class="section">
        <p class="mt-2">
          このサイトは日々の学習をqiitaに残しやすいようにgithubと連携してコミットやコードを簡単にコピー＆ペーストしてqiitaに投稿できることを目的に開発しました。
        </p>
        <p>
          学習した内容を自分の頭を整理することも出来ますし、多くの人に共有することもできます。是非つかってみてください。
        </p>
        <p>
          ご利用に当たってはqiitaのアカウントとgithubのアカウントが必要になりますので予め取得して下さい。
        </p>
      </section>
      <div class="columns is-centered mt-2">
        <div class="column is-half">
          <div class="card">
            <div class="card-content">
              <h2 class="subtitle has-text-centered">
                サイトでアカウントを作成する
              </h2>
              <div
                class="mt-2 is-justify-content-space-around has-text-centered"
              >
                アカウントを持っていない場合は登録を行って下さい。
                <div class="has-text-centered mt-2">
                  <button class="button mr-5">Qiita</button>
                  <button class="button">github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-centered mt-2">
        <div class="column is-half">
          <div class="card">
            <div class="card-content">
              <h2 class="subtitle has-text-centered">
                OAuth認証でログインする
              </h2>
              <div class="has-text-centered">
                アカウントがある場合はこちらのボタンでログインしてください。
                <div class="columns">
                  <div class="column mt-2">
                    <button class="button has-text-centered mr-5">
                      github
                    </button>
                    <button class="button has-text-centered">qiita</button>
                  </div>
                </div>
                <modal-card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue"; // @ is an alias to /src
import ModalCard from "@/components/parts/ModalCard.vue";

export default defineComponent({
  name: "Index",
  components: {
    Dashboard,
    ModalCard,
  },
});
</script>
