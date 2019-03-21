<template>
  <q-page padding>
    <!-- content -->

    <h4 class="titulos cadastro">Cadastro</h4>
    <div class="q-subheading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati placeat enim commodi facilis, ipsum dolor dolorum similique eaque, mollitia quas exercitationem neque in provident doloribus porro magnam illum. Dolorum, assumenda.</div>
    <hr>
    <main class="q-layout-page docs-input row justify-center layout-padding">

    <div class="width: 800px; max-width: 90vw;">

    <form action="submit">
      <q-input v-model="text" float-label="Nome" placeholder="João" class="col-12" />
      <q-input v-model="text" float-label="Sobrenome" placeholder="da Silva" class="col-12" />
      <q-input v-model="text" float-label="RG" placeholder="123457" class="col-12" />
      <q-btn
        color="primary"
        size="md"
        label="Enviar"
        />
    </form>
    </div>
    </main>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
.titulos{
  margin-top: 0;
  color:#636363
}
.cadastro{
  margin-bottom: 0;
}
</style>
