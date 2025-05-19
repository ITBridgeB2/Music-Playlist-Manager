#include<iostream>

int sumOfNumbers( int num){
    int sum =0;
    for(int i=1;i<=num;i++){
      sum += i;
    }
    return sum;
}
int main(){
    int num;
 std::cout<<"enter the value of num : ";
  std::cin>>num;
 std::cout<<sumOfNumbers(num);
}