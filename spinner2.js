/*setTimeout(() => {
  process.stdout.write('\r|   ');
}100){
  process.stdout.write('\r/    ');
}300{
  process.stdout.write('\r-   ');
}500{
  process.stdout.write('\r\\   '); 
}700{
  process.stdout.write('\r_    ');
}900{
  process.stdout.write('\r|    ');
}1100{
  process.stdout.write('\r/    ');
}1300{
  process.stdout.write('\r-    ');
}1500{
  process.stdout.write('\r\    '); 
}1700{
  process.stdout.write('\r_   ');
}1900{*/
 

let str = ('|/-\\_');
let delay = 100;
for (let char of str) {
  setTimeout(() => {
    process.stdout.write(`\r ${char}`);
  },delay)
  delay +=200;
};

