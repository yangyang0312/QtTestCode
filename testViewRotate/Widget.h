#ifndef WIDGET_H
#define WIDGET_H

#include <QWidget>
#include <QPaintEvent>

namespace Ui {
class Widget;
}

class Widget : public QWidget
{
    Q_OBJECT

public:
    explicit Widget(QWidget *parent = 0);
    ~Widget();

signals:
    void changeRotate(int rotate);

private slots:
    void on_pushButton_clicked();

    void on_checkBox_clicked();

private:
    Ui::Widget *ui;
};

#endif // WIDGET_H
