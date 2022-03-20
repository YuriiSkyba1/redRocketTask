export default class CircularBuffer {
	constructor(bufferSize){
		this.bufferSize = bufferSize;
		this.arr = [];
	}
	write(el){
		if(el == undefined) return;
		if(this.arr.length == this.bufferSize) 
		throw new BufferFullError();
		this.arr.push(el);
	}
	read(){
		if(!this.arr.length) 
			throw new BufferEmptyError();
		return this.arr.shift();
	}
	forceWrite(el){
		if(this.arr.length == this.bufferSize) 
		this.read();
		this.write(el);
	}
	clear(){
		this.arr = [];
	}
}
export class BufferFullError extends Error {
  constructor() {
    super("Buffer is totally full");
    this.name = "Buffer full error";
  }
}
export class BufferEmptyError extends Error {
  constructor() {
    super("Buffer is empty");
    this.name = "Buffer empty error";
  }
}
