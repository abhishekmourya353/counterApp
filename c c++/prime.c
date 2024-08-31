#include<stdio.h>
int main()
{
    int a,b;
    printf("enter anumber: ");
    scanf("%d",&a);
    int i=2;
    while(i<a)
    {
        if(a%i==0)
        {
            printf("not prime");
            return 0;

        }
        i=i+1;
    }
    printf("prime");
    return 0;
}