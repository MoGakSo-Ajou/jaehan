declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}
// scss typescript 충돌 방지