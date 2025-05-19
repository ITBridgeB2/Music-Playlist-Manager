#include<iostream>
int main(){
int n;
std::cout<<"enter the number of line to be printed ";
std::cin>>n;
for(int i=0;i<n;i++){
    char ch = 'A';
  for( int j=0;j<n;j++){
    std::cout<<ch;
    ch = ch +1;
  }
  std::cout<<"\n";
}
}