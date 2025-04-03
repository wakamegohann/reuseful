FROM python:3.11.11
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# 変数設定
ARG WORK_DIR=reuseful
ARG WORK_USER=kiyo
ARG USER_UID=1000
ARG USER_GID=1000


ENV PATH "$PATH:/home/$WORK_USER/.local/bin"
# ユーザーを新規作成
RUN groupadd --gid $USER_GID $WORK_USER \
    && useradd --uid $USER_UID --gid $USER_GID -m $WORK_USER \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $WORK_USER ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$WORK_USER \
    && chmod 0440 /etc/sudoers.d/$WORK_USER
USER $WORK_USER

# ワークスペースを作成
RUN mkdir /home/$WORK_USER/$WORK_DIR
WORKDIR /home/$WORK_USER/$WORK_DIR

RUN mkdir -p /home/$WORK_USER/$WORK_DIR/src && \
    chmod 755 /home/$WORK_USER/$WORK_DIR/src && \
    chown -R $WORK_USER:$WORK_USER /home/$WORK_USER/$WORK_DIR/src

ADD docker/django/requirements.txt /home/$WORK_USER/$WORK_DIR

# pipライブラリをインストール&パーミッションを変更
RUN pip install --upgrade pip \
    && sudo chown -R $WORK_USER:$WORK_USER /home/$WORK_USER/$WORK_DIR\
    && pip install -r /home/$WORK_USER/$WORK_DIR/requirements.txt \
    && pip install Pillow

COPY back /home/$WORK_USER/$WORK_DIR/src/
COPY ./.env /home/$WORK_USER/$WORK_DIR/src/.env

# ディレクトリに書き込み権限を追加
RUN sudo chmod -R 775 /home/$WORK_USER/$WORK_DIR/src/reuseful/migrations/

# または、ユーザーのオーナーシップを変更（コンテナの実行ユーザーが `kiyo` であれば）
RUN sudo chown -R $WORK_USER:$WORK_USER /home/$WORK_USER/$WORK_DIR/src/reuseful/migrations/


WORKDIR /home/$WORK_USER/$WORK_DIR/src/

CMD ["daphne", "-b", "0.0.0.0", "-p", "8001", "project.asgi:application"]