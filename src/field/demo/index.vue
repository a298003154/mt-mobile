<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-list>
        <mt-field
          v-model="value"
          :placeholder="$t('usernamePlaceholder')"
        />
      </mt-list>
    </demo-block>

    <demo-block :title="$t('title2')">
      <mt-list>
        <mt-field
          v-model="username"
          :label="$t('username')"
          :placeholder="$t('usernamePlaceholder')"
          required
          clearable
          right-icon="circle-question"
          @click-right-icon="$toast('question')"
        />

        <mt-field
          v-model="password"
          type="password"
          :label="$t('password')"
          :placeholder="$t('passwordPlaceholder')"
          required
        />
      </mt-list>
    </demo-block>

    <demo-block :title="$t('title3')">
      <mt-list>
        <mt-field
          :value="$t('inputDisabled')"
          :label="$t('username')"
          left-icon="user"
          disabled
        />
      </mt-list>
    </demo-block>

    <demo-block :title="$t('title4')">
      <mt-list>
        <mt-field
          v-model="username2"
          :label="$t('username')"
          :placeholder="$t('usernamePlaceholder')"
          arrow="up"
          error
        />
        <mt-field
          v-model="phone"
          :label="$t('phone')"
          :placeholder="$t('phonePlaceholder')"
          :error-message="$t('phoneError')"
        />
      </mt-list>
    </demo-block>

    <demo-block :title="$t('title5')">
      <mt-list>
        <mt-field
          v-model="message"
          :label="$t('message')"
          type="textarea"
          :placeholder="$t('messagePlaceholder')"
          rows="1"
          autosize
        />
      </mt-list>
    </demo-block>

    <demo-block :title="$t('title6')">
      <mt-list>
        <mt-field
          center
          clearable
          v-model="sms"
          :label="$t('sms')"
          :placeholder="$t('smsPlaceholder')"
        >
          <template #button>
            <mt-button
              size="small"
              type="primary"
            >
              {{ $t('sendSMS') }}
            </mt-button>
          </template>
        </mt-field>
      </mt-list>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '自定义类型',
      title3: '禁用输入框',
      title4: '错误提示',
      title5: '高度自适应',
      title6: '插入按钮',
      message: '留言',
      phone: '手机号',
      sms: '短信验证码',
      sendSMS: '发送验证码',
      smsPlaceholder: '请输入短信验证码',
      phonePlaceholder: '请输入手机号',
      messagePlaceholder: '请输入留言',
      inputDisabled: '输入框已禁用',
      phoneError: '手机号格式错误'
    },
    'en-US': {
      title2: 'Custom type',
      title3: 'Disabled',
      title4: 'Error info',
      title5: 'Auto resize',
      title6: 'Insert button',
      message: 'Message',
      phone: 'Phone',
      sms: 'SMS',
      sendSMS: 'Send SMS',
      smsPlaceholder: 'SMS',
      phonePlaceholder: 'Phone',
      messagePlaceholder: 'Message',
      inputDisabled: 'Disabled',
      phoneError: 'Invalid phone'
    }
  },

  data() {
    return {
      sms: '',
      value: '',
      password: '',
      username: '',
      username2: '',
      message: '',
      phone: '1365577'
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-field {
  padding-bottom: 30px;

  .mt-field__right-icon .mt-icon {
    color: @blue;
  }
}
</style>
