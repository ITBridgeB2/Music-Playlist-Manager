//check the length of the string
#include<iostream>
int main(){
 int numb ;
 int count =0;
 std::cout<<"enter the number : ";
 std::cin>>numb;
 int temp = numb;
 if(numb==0){
    count=1;
}
    else{
while(numb>0){
    numb=numb/10;
    count++;
}}
 
 std::cout<<count;
return 0;
}