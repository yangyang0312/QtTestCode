#include "MyThread2.h"

MyThread2::MyThread2(QObject *parent) : QObject(parent)
{

}

void MyThread2::Process2(int num)
{
    qDebug()<<__PRETTY_FUNCTION__<<QThread::currentThreadId()<<"process"<<num;
    QThread::msleep(3000);//耗时
    qDebug()<<__PRETTY_FUNCTION__<<QThread::currentThreadId()<<"processed"<<num;
    emit ProcessComplete2(QThread::currentThreadId(),num);
}
