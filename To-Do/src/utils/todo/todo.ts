export const sum
    = (...a: number[]) =>
      a.reduce((acc, val) => acc + val, 0);



export const Todo =  (task: []): void => {
    console.log(task)
}