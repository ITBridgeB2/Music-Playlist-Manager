//if i=0
/*#include<iostream>
int main(){
    int n=4;
    for(int i=0;i<n;i++){
        for(int j=1;j<=i+1;j++){
            std::cout<<"*";
        }
        std::cout<<"\n";
    }
    for(int i=0;i<=n-2;i++){
        for(int j=n-(i+1);j>=1;j--){
            std::cout<<"*";
        }
        std::cout<<"\n";
    }
    return 0;
}*/
      //i=1
     #include<iostream>
      int main()
      
{
    int n=4;
    for(int i=1;i<=n;i++){
     for(int j=1;j<=i;j++){
        std::cout<<"*";
     }
     std::cout<<"\n";
    }
    for(int i=1;i<=n-1;i++){
        for(int j=n-i;j>=1;j--){
            std::cout<<"*";
        }
        std::cout<<"\n";
    }
    return 0;
}
