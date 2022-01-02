import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,private _snackBar: MatSnackBar) { }

  public user = {

    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',


  }

  ngOnInit(): void {
  }


  formSubmt() {


    if (this.user.username == "" || this.user.username == null) {

      this._snackBar.open('username is must!!','X',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      })
        return;

    } else {

      this.userService.addUser(this.user).subscribe(
        (data) => {
          
          Swal.fire("done!",'','success')

        },
        (error) => {

          
          Swal.fire("fail!",'','error')
          this._snackBar.open("something went wrong...",'',{
            duration:1000
          })
        }
      )




    }

  }

}
