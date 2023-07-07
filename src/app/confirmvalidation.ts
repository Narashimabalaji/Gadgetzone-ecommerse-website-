import { FormGroup } from "@angular/forms";

export function Confirmedvalidators(cn:string,mcn:string) {
return (formgroup:FormGroup)=>{
  const pass=formgroup.controls[cn];
  const cpass=formgroup.controls[mcn];


  if(pass.value!==cpass.value){
    cpass.setErrors({Confirmedvalidators:true})
  }
  else{
    cpass.setErrors(null);
  }


}
}
