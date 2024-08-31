#include<iostream>
using namespace std;
struct compex
{
    int real,image;

};
int main()
{
    complex n1,n2,n3;
    cin>>n1.real>>n1.image;
    cin>>n2.real>>n2.image;
    n3.real=n1.real+n2.real;
    n3.image = n1.image + n2.image;

cout<<n3.real<<"  + "<<n3.image<<"i";
return 0;
}