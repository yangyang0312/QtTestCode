#ifndef MYGRAPHICSPROXYWIDGET_H
#define MYGRAPHICSPROXYWIDGET_H

#include <QObject>
#include <QGraphicsProxyWidget>

class MyGraphicsProxyWidget : public QObject
{
    Q_OBJECT
public:
    explicit MyGraphicsProxyWidget(QGraphicsProxyWidget * view,QObject *parent = 0);
public slots:
    void changeRotate(int rotate);
private:
    QGraphicsProxyWidget * view;
};

#endif // MYGRAPHICSPROXYWIDGET_H
