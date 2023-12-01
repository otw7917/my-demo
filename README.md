# 500's Dev Hompage

### TailwindCSS

#### h1, h2 @layer base에 추가해주기

##### 🚀 problem

tailwindcss **preflight**로 인해 브라우저 내장 스타일 초기화!

- 결과적으로 h1, h2등이 다 똑같은 스타일로 나타남, 대표적으로 `box-sizing` 프로퍼티가 `content-box` -> `border-box`

##### 🔥 solution

기본적인 html 태그의 스타일링은 `@layer base`에 추가해주기

```css
@layer base {
  h1 {
    @apply text-2xl font-extrabold;
  }
  h2 {
    @apply text-xl font-bold;
  }
}
```

참고로 인라인이 css가 가장 우선순위 base > components
