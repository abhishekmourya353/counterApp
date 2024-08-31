#include<stdio.h>
//int factorial(int n);
int main()
{
int n;
printf("enter a number: ");
scanf("%d",&n);
printf("%d", n);
return 0;

}
int factorial(int n){
    if(n==0){
    return 1;
    }
int facto=factorial(n-1);
int factor=facto*n;
return factor;
}
