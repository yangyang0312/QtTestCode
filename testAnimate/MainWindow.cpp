#include "MainWindow.h"
#include "ui_MainWindow.h"
#include <QPropertyAnimation>
#include <QSequentialAnimationGroup>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    QSequentialAnimationGroup * animate_ = new QSequentialAnimationGroup(this);
    QPropertyAnimation * animate = new QPropertyAnimation(ui->pushButton,"pos");
    animate->setEndValue(QPoint(100,200));
    animate->setDuration(1000);
    animate_->addAnimation(animate);
    animate_->addPause(500);
    animate->setEasingCurve(QEasingCurve::OutCirc);
    animate = new QPropertyAnimation(ui->pushButton,"pos");
    animate->setEndValue(QPoint(50,50));
    animate->setDuration(2000);
    animate->setEasingCurve(QEasingCurve::InCirc);
    animate_->addAnimation(animate);
    connect(ui->pushButton,SIGNAL(clicked()),animate_,SLOT(start()));
}

MainWindow::~MainWindow()
{
    delete ui;
}
