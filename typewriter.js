let sentence = "hello there from lighthouse labs";

let counter = 0;
for (const char of sentence) {
  counter ++;
  setTimeout(() => {
    process.stdout.write(char);
  }, 50 * counter);
    
}
setTimeout(() => {
  process.stdout.write('\n');
}, 50 * sentence.length);