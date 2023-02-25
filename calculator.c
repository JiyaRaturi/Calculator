#include <stdio.h>
#include <math.h>
void addition() 
{
    int num, i,sum = 0;
    printf("press 'zero' to do sum.\nEnter the number you wants to add::");
    for ( i=0; ;i++)
    {
        scanf("%d", &num);
        sum = sum + num;
        if(num==0)
        break;
    }
    printf("SUM=%d\n>>",sum);
}
void subtraction()
{
    int num, i,sub,n,sum=0;
    printf("press 'zero' to do sub.\nEnter the number you wants to subtraction::");
    scanf("%d",&num);
    for ( i=0; ;i++)
    {
        scanf("%d", &n);
        sum = sum + n;
        if(n==0)
        break;
    }
    printf("SUBTRACTION =%d\n>>",num-sum);
}
void multiplication()
{
    int num,i,mul=1;
    printf("Press 'one'for multiplication\nEnter the number:: ");
    for(i=0; ;i++)
    {
        scanf("%d",&num);
        mul=num*mul;
        if(num==1)
        break;
    }
    printf("The multiplication=%d\n>>",mul);
}
void divide()
{
    float a, b,div,i,d;
    printf("press 'One' to do divide.\nENTER THE NUMBER FOR division::");
    scanf("%f %f", &a, &b);
    div=a/b;
    
    for(i=0; ;i++)
    {
        scanf("%f",&d);
        div=div/d;
        if(d==1)
        break;
    }
    printf("The Division=%.2f\n>>",div);
}
void moduls() 
{
    int a, b;
printf("ENTER THE NUMBER FOR MODULS::");
scanf("%d %d", &a, &b);
printf("THE REMAINDER = %d\n>>",a%b);
}
void thanks()
{
    printf("Thanks!");
}
void  factorial() 
{   
    int i,num,fact;
    printf("Enter the number you want factorial of::");
    scanf("%d",&num);
    fact=num;
    for ( i = 1; i < num; i++)   
    {
        fact=fact*i;   
    }
    printf("The Factorial =%d\n>>",fact);
}
void main()
{
    int opt,calci;
    printf("1-ADDITION\t\t\t2-SUBTRACTION\n3-MULTIPLICATION\t\t4-DIVISION\n5-MODULS\t\t\t6-FACTORIAL\n\t\tPREE'ZERO' TO END\n>>");
    
    for (int i = 0;  ;i++)
    {
        scanf("%d",&opt);
        switch (opt)
    {
    case 1:
        addition();
        break;
    case 2:
        subtraction();
        break;
    case 3:
        multiplication();
        break;
    case 4:
        divide();
        break;
    case 5:
        moduls();
        break;
    case 6:
        factorial();
        break;
    case 0:
        thanks();
        break;
    default:
        printf("Please enter a valid choice!\n>>");
        break;
    }
    }   
}