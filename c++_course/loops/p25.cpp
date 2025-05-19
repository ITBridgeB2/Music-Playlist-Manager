//starrting from i=0
/*#include<iostream>
int main(){
    int n=10;
    for(int i=0;i<n;i++){
        for(int j=1;j<=i+1;j++){
            std::cout<<j;
        }
        std::cout<<"\n";
    }
}*/
//starting from i=1
#include<iostream>
int main(){
    int n=10;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            std::cout<<j;
        }
        std::cout<<"\n";
    }
}

