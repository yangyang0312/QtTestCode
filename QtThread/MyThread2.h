#ifndef MYTHREAD2_H
#define MYTHREAD2_H

#include <QObject>
#include <QThread>
#include <QDebug>

class MyThread2 : public QObject
{
    Q_OBJECT

public:
    explicit MyThread2(QObject *parent = 0);

signals:
    void ProcessComplete2(Qt::HANDLE threadId,int result);

public slots:
    void Process2(int num);
};

#endif // MYTHREAD2_H
