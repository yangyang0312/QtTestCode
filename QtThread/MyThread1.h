#ifndef MYTHREAD1_H
#define MYTHREAD1_H

#include <QObject>
#include <QThread>
#include <list>
#include <QMutex>
#include <QDebug>
#include <QWaitCondition>

//继承自QThread，重写run，run中执行的代码为子线程
class MyThread1 : public QThread
{
    Q_OBJECT

public:
    MyThread1();

signals:
    void ProcessComplete(Qt::HANDLE threadId,int result);

public slots:
    void Process(int num);

protected:
    void run();

private:
    std::list<int> list_;
    QMutex mutex_;
    QMutex wait_;
    QWaitCondition condition_;
};

#endif // MYTHREAD1_H
