
const steps = (N) => {
    let str = '#';
    for (let i = 0; i < N; i++) {
      console.log(str);
      str = str.concat('#');
    }
  }
  
  steps(3);
