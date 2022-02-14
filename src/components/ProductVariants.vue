/* eslint-disable vue/require-v-for-key */
<script>
import { generateVariant } from "@/common/multivariant";

export default {
  data() {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: "gray.700",
          color: "whiteAlpha.900",
        },
        light: {
          bg: "white",
          color: "gray.900",
        },
      },
      variants_type: [
        { type: "Warna", values: ["Hitam", "Putih"] },
        { type: "Size", values: ["S", "M"] },
      ],
      variants_sku: [
        [
          { type: "Warna", value: "Hitam" },
          { type: "Size", value: "S" },
        ],
        [
          { type: "Warna", value: "Hitam" },
          { type: "Size", value: "M" },
        ],
        [
          { type: "Warna", value: "Putih" },
          { type: "Size", value: "S" },
        ],
        [
          { type: "Warna", value: "Putih" },
          { type: "Size", value: "M" },
        ],
      ],
      test: "Test",
    };
  },
  methods: {
    showVariants() {
      if (typeof this.variants_type[0].values == "string")
        this.variants_type[0].values = this.variants_type[0].values.split(",");
      if (typeof this.variants_type[1].values == "string")
        this.variants_type[1].values = this.variants_type[1].values.split(",");
      console.log(JSON.stringify(this.variants_type));
      this.variants_sku = generateVariant(this.variants_type);
    },
  },
};
</script>
<template>
  <h1>Product Variant</h1>
  <div v-for="(item, index) in variants_type">
    <div :key="index">
      <input v-model="item.type" />
      <input v-model="item.values" /><em>Pisah value dgn ','</em>
    </div>
  </div>
  <div><em>Combinator variant support multi tipe variant</em></div>
  <button v-on:click="showVariants">Generate variants SKU</button>
  <br /><br />
  <ul>
    <li v-for="(sku, index) in variants_sku">
      <div v-for="v in sku" :key="index">{{ v.type }} : {{ v.value }}</div>
      <div><input placeholder="sku" /><input placeholder="Harga" /></div>
    </li>
  </ul>
</template>
