#include "Manager.h"
#include <QDebug>
#include <QScrollBar>

Manager::Manager(QObject *parent) : QObject(parent)
{
    widget = new Widget;
    scene = new QGraphicsScene;
    scene->setSceneRect(widget->geometry());
    w = scene->addWidget(widget);
    myView = new MyGraphicsProxyWidget(w);
    //w->setRotation(180);
    view = new QGraphicsView(scene);
    view->setWindowFlags(Qt::FramelessWindowHint);//无边框
    view->setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
    view->setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
    //view->resize(1000,1000);
    //view->setTransformationAnchor(QGraphicsView::NoAnchor);
    QObject::connect(widget,SIGNAL(changeRotate(int)),this,SLOT(changeRotate(int)));
    QObject::connect(widget,SIGNAL(changeRotate(int)),myView,SLOT(changeRotate(int)));
    view->setFrameStyle(QFrame::NoFrame);//无Frame边框
    view->show();
}

void Manager::changeRotate(int)
{
    //static int rotateCount = 1;
    //if(rotateCount ==1 || rotateCount == 3){
    //    view->resize(400,300);
    //}else{
    //    view->resize(300,400);
    //}
    //if(rotateCount == 4)
    //    rotateCount = 0;
    //++rotateCount;
}
