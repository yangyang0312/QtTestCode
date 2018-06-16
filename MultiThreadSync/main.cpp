#include <QCoreApplication>
#include <QThread>
#include <QObject>
#include <QMutex>
#include <QWaitCondition>
#include <QDebug>

QMutex mutex1_;
QMutex mutex2_;
QMutex mutex3_;
QWaitCondition condition1_;
QWaitCondition condition2_;
QWaitCondition condition3_;

class Thread1 : public QThread
{
public:
    Thread1(){}
protected:
    void run()
    {
        for(int i = 0;i < 10;++i)
        {
            mutex1_.lock();
            condition1_.wait(&mutex1_);
            mutex1_.unlock();
            qDebug()<<QThread::currentThreadId()<<"A";
            condition2_.wakeAll();
        }
    }
};

class Thread2:public QThread
{
public:
    Thread2(){}
protected:
    void run()
    {
        for(int i = 0;i < 10;++i)
        {
            mutex2_.lock();
            condition2_.wait(&mutex2_);
            mutex2_.unlock();
            qDebug()<<QThread::currentThreadId()<<"B";
            condition3_.wakeAll();
        }
    }
};

class Thread3:public QThread
{
public:
    Thread3(){}
protected:
    void run()
    {
        for(int i = 0;i < 10;++i)
        {
            mutex3_.lock();
            condition3_.wait(&mutex3_);
            mutex3_.unlock();
            qDebug()<<QThread::currentThreadId()<<"C";
            condition1_.wakeAll();
        }
    }
};

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    qDebug()<<"Main Thread ID"<<QThread::currentThreadId();
    Thread1 obj1;
    Thread2 obj2;
    Thread3 obj3;
    obj1.start();
    obj2.start();
    obj3.start();
    QThread::sleep(1);
    condition1_.wakeAll();//确保线程启动后执行

    return a.exec();
}
