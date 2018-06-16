#include "MyThread1.h"

MyThread1::MyThread1()
{

}

void MyThread1::Process(int num)
{
    qDebug()<<__PRETTY_FUNCTION__<<QThread::currentThreadId()<<"recv"<<num;
    mutex_.lock();
    list_.push_back(num);
    mutex_.unlock();
    condition_.wakeAll();
}

void MyThread1::run()
{
    qDebug()<<__PRETTY_FUNCTION__<<QThread::currentThreadId()<<"in";
    while (true)
    {
        wait_.lock();
        condition_.wait(&wait_,5000);
        wait_.unlock();
        qDebug()<<__PRETTY_FUNCTION__<<QThread::currentThreadId()<<"waited";
        while(list_.size() > 0)
        {
            mutex_.lock();
            int num = list_.front();
            list_.pop_front();
            mutex_.unlock();
            qDebug()<<__PRETTY_FUNCTION__<<QThread::currentThreadId()<<"process"<<num;
            msleep(3000);//耗时
            qDebug()<<__PRETTY_FUNCTION__<<QThread::currentThreadId()<<"process complete"<<num;
            emit ProcessComplete(QThread::currentThreadId(),num);
        }
    }
    qDebug()<<__PRETTY_FUNCTION__<<QThread::currentThreadId()<<"out";
}
