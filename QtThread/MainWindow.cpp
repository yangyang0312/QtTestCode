#include "MainWindow.h"
#include "ui_MainWindow.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    qDebug()<<__PRETTY_FUNCTION__<<QThread::currentThreadId();
    thread1_ = 0;
    thread2_ = 0;
    number_ = 0;
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::ProcessComplete(Qt::HANDLE threadId, int num)
{
    qDebug()<<__PRETTY_FUNCTION__<<threadId<<num<<"complete";
}

void MainWindow::on_btn_start_1__clicked()
{
    if(!thread1_)
    {
        thread1_ = new MyThread1();
        connect(thread1_,SIGNAL(ProcessComplete(Qt::HANDLE,int)),this,SLOT(ProcessComplete(Qt::HANDLE,int)));
        connect(this,SIGNAL(Process(int)),thread1_,SLOT(Process(int)));
        thread1_->start();
    }
}

void MainWindow::on_btn_start_2__clicked()
{
    if(!thread2_)
    {
        thread2_ = new QThread();
        MyThread2 * th2 = new MyThread2();
        connect(th2,SIGNAL(ProcessComplete2(Qt::HANDLE,int)),this,SLOT(ProcessComplete(Qt::HANDLE,int)));
        connect(this,SIGNAL(Process2(int)),th2,SLOT(Process2(int)));
        th2->moveToThread(thread2_);
        thread2_->start();
    }
}

void MainWindow::on_btn_process_1__clicked()
{
    ++number_;
    if(thread1_)
        emit Process(number_);
}

void MainWindow::on_btn_process_2__clicked()
{
    ++number_;
    qDebug()<<__PRETTY_FUNCTION__<<"emit"<<number_;
    if(thread2_)
        emit Process2(number_);
}
