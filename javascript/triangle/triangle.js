export class Triangle {
	constructor(s1, s2, s3) {
  		const s = [s1,s2,s3].map(Number).sort((a,b) => a-b)
		this.s = s
	}
	kind() {
		const s = this.s
		this.validate(s)
		return (s[0]===s[1] && s[1]===s[2] && s[2]===s[0])
			? 'equilateral'
			: (s[0]!==s[1] && s[1]!==s[2] && s[2]!==s[0])
				? 'scalene'
				: 'isosceles'
	}
	validate(s){
		const error_msg = "This is not a valid triangle"
		if(s[0]+s[1] < s[2]){
			throw new Error(error_msg)
		}
		if(s.map(x => x<=0).some(x => x==true)){
			throw new Error(error_msg)
		}
	}
}
