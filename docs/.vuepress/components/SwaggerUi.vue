<template>
    <div ref="swagger">swagger</div>
</template>

<script setup>
import SwaggerUI from 'swagger-ui';
import { onMounted, ref } from 'vue';

const data = import.meta.glob('../open-api/**/*.json')

const props = defineProps(['spec'])
const swagger = ref(null)

const file = '../open-api/'+props.spec

console.log(file)
console.log(data[file]())

onMounted(() => {
    data[file]().then(res => {
        SwaggerUI({
            domNode: swagger._rawValue,
            spec: res.default
        })
    })
})
</script>
<style>
.swagger-ui {
    & h3 {
        margin-top: 0;
        padding-top: 30px;
    }
    & button {
        border: none;
        background: var(--c-brand);
        padding: 10px 8px;
        display: inline-block;
        white-space: nowrap;

        &.opblock-summary-control {
            width: 100%;
            display: flex;
        }
    }
    & .svg-assets {
        display: none;
    }
    & .title {
        display:flex;
        align-items: center;
        gap: 10px;

        & pre {
            display: inline-block;
            background-color: var(--c-badge-tip);
            color: var(--c-bg);
            font-size: 14px;
            height: 18px;
            line-height: 18px;
            border-radius: 3px;
            padding: 0 6px;
            margin: 0;
            margin-right: 5px;
        }
    }

    & .scheme-container {
        padding: 20px;
        background: var(--c-bg-light);

        & select {
            padding: 10px 15px;
            margin-top: 20px;
            background: var(--c-bg);
            color: var(--c-text);
            font-size: 16px;
            font-family: var(--font-family);
        }
    }
    & .wrapper {
        display: flex;

        & .block {
            width: 100%;
        }

        & .opblock-tag-section {

            & .opblock-tag {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
        }
    }

}
</style>