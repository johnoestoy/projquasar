<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item to="sobre">
          <q-item-side icon="work" />
          <q-item-main label="Sobre" sublabel="Descrição Sobre" />
        </q-item >
        <q-item to="galeria">
          <q-item-side icon="photo_library" />
          <q-item-main label="Galeria" sublabel="Descrição Galeria" />
        </q-item>
        <q-item to="portfolio">
          <q-item-side icon="accessibility" />
          <q-item-main label="Portfolio" sublabel="Descrição Portfolio" />
        </q-item>
        <q-item to="contato">
          <q-item-side icon="contacts" />
          <q-item-main label="Contato" sublabel="Descrição Contato" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
